import { Injectable } from '@angular/core';
import { Firestore, Timestamp, addDoc, collectionData, deleteDoc, doc, docData, updateDoc, where, query } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Judge {
  id?: string;
  auth_id: string;
  name: string;
  contactnum: string;
  email: string;
}

export interface Event {
  id?: string;
  name: string;
  description: string;
  event_img: string;
  start_time: Timestamp;
  end_time: Timestamp;
  venue: string;
}

export interface Booth {
  id?: string;
  name: string;
  members: string;
  event_id: string;
  description: string;
  available: boolean;
  location: string;
}

export interface JudgeBooth {
  id?: string;
  booth_id: string;
  judge_id: string;
  evaluated: boolean;
}

export interface JudgeBoothWithBooth extends JudgeBooth {
  booth: Booth | null;
}

export interface Criteria {
  id?: string;
  max_score: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }
  // JUDGE
  getJudge(): Observable<Judge[]> {
    const judgeRef = collection(this.firestore, 'judge');
    return collectionData(judgeRef, { idField: 'id' }) as Observable<Judge[]>;
  }

  getJudgeByAuthId(authId: string): Observable<Judge[]> {
    const judgesRef = collection(this.firestore, 'judge');
    const getQuery = query(judgesRef, where('auth_id', '==', authId));
    const judgeDoc = collectionData(getQuery, { idField: 'id' }) as Observable<Judge[]>;
    return judgeDoc;
  }

  addJudge(judge: Judge) {
    const judgeRef = collection(this.firestore, 'judge');
    return addDoc(judgeRef, judge);
  }

  deleteJudge(judge: Judge) {
    const judgeDocRef = doc(this.firestore, `judge/${judge.id}`);
    return deleteDoc(judgeDocRef);
  }

  updateJudge(judge: Judge) {
    const judgeDocRef = doc(this.firestore, `judge/${judge.id}`);
    return updateDoc(judgeDocRef, {
      name: judge.name,
      contactnum: judge.contactnum,
      email: judge.email
    });
  }

  // EVENT
  getEvent(): Observable<Event[]> {
    const eventRef = collection(this.firestore, 'event');
    return collectionData(eventRef, { idField: 'id' }) as Observable<Event[]>;
  }

  // BOOTH
  getBooth(): Observable<Booth[]> {
    const boothRef = collection(this.firestore, 'booth');
    return collectionData(boothRef, { idField: 'id' }) as Observable<Booth[]>;
  }

  getBoothById(id: any): Observable<Booth[]> {
    const boothDocRef = doc(this.firestore, `booth/${id}`);
    return docData(boothDocRef, { idField: 'id' }) as Observable<Booth[]>;
  }

  // JUDGE-BOOTH
  getJudgeBooth(): Observable<JudgeBooth[]> {
    const judgeBoothRef = collection(this.firestore, 'judge_booth');
    return collectionData(judgeBoothRef, { idField: 'id' }) as Observable<JudgeBooth[]>;
  }

  combineData(judgeBooths: JudgeBooth[], booths: Booth[]): JudgeBoothWithBooth[] {
    return judgeBooths.map((judgeBooth) => {
      const booth = booths.find((b) => b.id === judgeBooth.booth_id);
      return {
        ...judgeBooth,
        booth: booth ? booth : null,
      };
    });
  }

  // CRITERIA
  getCriteria(): Observable<Criteria[]> {
    const criteriaRef = collection(this.firestore, 'criteria');
    return collectionData(criteriaRef, { idField: 'id' }) as Observable<Criteria[]>;
  }
}
