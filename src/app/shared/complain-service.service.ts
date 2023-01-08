import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ComplainFields } from '../shared/complain-fields';

@Injectable({
  providedIn: 'root',
})
export class ComplainService {
  complainsRef: AngularFirestoreCollection<ComplainFields>;
  complainRef: AngularFireObject<any>;

  constructor(private db: AngularFirestore) {
    this.complainsRef = this.db.collection('/complains');
    console.log(this.complainsRef);
  }

  getAllComplains(): AngularFirestoreCollection<ComplainFields> {
    console.log(this.complainsRef);
    return this.complainsRef;
  }

  create(complain: ComplainFields): any {
    return this.complainsRef.add({ ...complain });
  }

  update(id: string, data: any): Promise<void> {
    return this.complainsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.complainsRef.doc(id).delete();
  }
}
