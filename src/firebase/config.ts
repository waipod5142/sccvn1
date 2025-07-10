import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //INSEESAFETYAPP
  apiKey: "AIzaSyCbLOLR4KqlWaGOfvZesdVVgFzlyDluPkI",
  authDomain: "sccc-inseesafety-prod.firebaseapp.com",
  projectId: "sccc-inseesafety-prod",
  storageBucket: "sccc-inseesafety-prod.firebasestorage.app",
  messagingSenderId: "874085997493",
  appId: "1:874085997493:web:5156272fd22b224b5097fc",
  measurementId: "G-KZT8MZC6MB",

  //scco5142@gmail.com
  // apiKey: 'AIzaSyByR6vpXZs1A01EW2L1y03xJtFtRtCH5mc',
  // authDomain: 'scco-4302c.firebaseapp.com',
  // projectId: 'scco-4302c',
  // storageBucket: 'scco-4302c.appspot.com',
  // messagingSenderId: '207080654790',
  // appId: '1:207080654790:web:fa49504530cd97f98654c7',

  //scco5143@gmail.com
  // apiKey: "AIzaSyDu8ujGTbuQvEgEmPxQMlKNBP9SgGGkzu0",
  // authDomain: "asset-634e8.firebaseapp.com",
  // projectId: "asset-634e8",
  // storageBucket: "asset-634e8.appspot.com",
  // messagingSenderId: "414159575667",
  // appId: "1:414159575667:web:c389fe63eefa5bbfbfa806"

  //scco5144@gmail.com
  // apiKey: "AIzaSyCdZZweEfBFkLU0ICAfHauJynow082SlP0",
  // authDomain: "sccoasset.firebaseapp.com",
  // projectId: "sccoasset",
  // storageBucket: "sccoasset.appspot.com",
  // messagingSenderId: "681667003845",
  // appId: "1:681667003845:web:ab18c89f9f4e0f40ba77ac"

  //cmic5142@gmail.com
  //  apiKey: "AIzaSyAyw4D3gpFweoPQmfvlwxracb3eGPdWQbM",
  //  authDomain: "asset-e12ba.firebaseapp.com",
  //  projectId: "asset-e12ba",
  //  storageBucket: "asset-e12ba.appspot.com",
  //  messagingSenderId: "350106840602",
  //  appId: "1:350106840602:web:8d85a731449170b723eba3"

  //sccc5143@gmail.com
  //pwd: 5143sccc
  // apiKey: 'AIzaSyBUDHQ_cwX2wvlrjQI8i25WW_MbFQ1fs7U',
  // authDomain: 'image-6cd41.firebaseapp.com',
  // projectId: 'image-6cd41',
  // storageBucket: 'image-6cd41.appspot.com',
  // messagingSenderId: '664545616782',
  // appId: '1:664545616782:web:4a3d6985f1600664c27adf',

  // Nakorn
  // apiKey: 'AIzaSyBcxgtQS9NAw-s-8NQvrYgfoFFN-pjoTwE',
  // authDomain: 'driver-trainer.firebaseapp.com',
  // projectId: 'driver-trainer',
  // storageBucket: 'driver-trainer.appspot.com',
  // messagingSenderId: '880118437940',
  // appId: '1:880118437940:web:99667eb61cbb5e18945261',
  // measurementId: 'G-QW184KJYQT',

  //sccvn5142@gmail.com
  //pwd: 5142sccvn
  // apiKey: 'AIzaSyDd60pCscJzz3fnhy7kAzWsPA1etJbqmaM',
  // authDomain: 'sccvn-f76c3.firebaseapp.com',
  // projectId: 'sccvn-f76c3',
  // storageBucket: 'sccvn-f76c3.appspot.com',
  // messagingSenderId: '651640227265',
  // appId: '1:651640227265:web:f1896f68242b8654ad1b40',
  // measurementId: 'G-KDK5K684HH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { storage };
