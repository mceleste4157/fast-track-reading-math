const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function checkUser() {
  console.log('Checking for user: bhardin@pasco.k12.fl.us\n');
  
  // Check ParentProfiles
  const parentSnapshot = await db.collection('ParentProfiles').get();
  console.log('=== All Parent Profiles ===');
  parentSnapshot.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id}`);
    console.log(`Email: ${data.email || 'N/A'}`);
    console.log(`Display Name: ${data.displayName || 'N/A'}`);
    console.log(`Created: ${data.createdAt ? data.createdAt.toDate() : 'N/A'}`);
    console.log('---');
  });
  
  // Check StudentProfiles
  const studentSnapshot = await db.collection('StudentProfiles').get();
  console.log('\n=== All Student Profiles ===');
  studentSnapshot.forEach(doc => {
    const data = doc.data();
    console.log(`Student ID: ${doc.id}`);
    console.log(`Name: ${data.name || 'N/A'}`);
    console.log(`Grade: ${data.grade || 'N/A'}`);
    console.log(`Parent ID: ${data.parentId || 'N/A'}`);
    console.log('---');
  });
}

checkUser().then(() => {
  console.log('\nDone!');
  process.exit(0);
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
