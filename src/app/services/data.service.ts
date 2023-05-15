import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Judge {
  auth_id?: string;
  name: string;
  contactnum: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getJudge(): Observable<Judge[]> {
    const judgeRef = collection(this.firestore, 'judge');
    return collectionData(judgeRef, { idField: 'id' }) as Observable<Judge[]>;
  }

  getJudgeById(id: any): Observable<Judge[]> {
    const judgeDocRef = doc(this.firestore, `judge/${id}`);
    return docData(judgeDocRef, { idField: 'id' }) as Observable<Judge[]>;
  }

  addJudge(judge: Judge) {
    const judgeRef = collection(this.firestore, 'judge');
    return addDoc(judgeRef, judge);
  }

  deleteJudge(judge: Judge) {
    const judgeDocRef = doc(this.firestore, `judge/${judge.auth_id}`);
    return deleteDoc(judgeDocRef);
  }

  updateJudge(judge: Judge) {
    const judgeDocRef = doc(this.firestore, `judge/${judge.auth_id}`);
    return updateDoc(judgeDocRef, {
      id: judge.auth_id,
      name: judge.name,
      contactnum: judge.contactnum,
      email: judge.email
    });
  }
}
