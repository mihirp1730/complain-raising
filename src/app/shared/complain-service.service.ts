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
// import { collection, doc, setDoc } from 'firebase/firestore';
import { ComplainFields } from '../shared/complain-fields';

@Injectable({
  providedIn: 'root',
})
export class ComplainService {
  complainsRef: AngularFirestoreCollection<ComplainFields>;
  complainRef: AngularFireObject<any>;

  constructor(private db: AngularFirestore) {
    this.complainsRef = db.collection('/complains');
    console.log(this.complainsRef);
  }

  getAllComplains(): AngularFirestoreCollection<ComplainFields> {
    console.log(this.complainsRef);
    return this.complainsRef;
  }

  create(complain: ComplainFields): any {
    return this.complainsRef.add({ ...complain });
  }

  // getAllComplains() {
  //   // const complainRef1 = collection(db, 'complains');
  //   // return new Promise<any>((resolve) => {
  //   //   // this.db.list('/complains').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
  //   //   var ref = this.db.ref('dinosaurs');
  //   const complainsList = this.db.list('/complains').snapshotChanges();
  //   // .subscribe((users) => resolve(users));
  //   console.log(complainsList);
  //   // });
  // }

  // Create User
  // AddComplain(complain: ComplainFields) {
  //   return this.complainsRef.push({
  //     customerName: complain.customerName,
  //     complainEmail: complain.customerEmail,
  //     complainNumber: complain.customerNumber,
  //     complainReason: complain.complainReason,
  //     complainId: complain.complaintId,
  //   });
  // }

  // createUser(value, avatar) {
  //   return this.db.database collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar,
  //   });
  // }
}
