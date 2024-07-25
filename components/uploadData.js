// import { database } from '../firebase';
// import firebaseExports from '../firebase';

// const { database } = firebaseExports;

// const jsonData = {
//     products: [
//       { id: '1', name: 'Product 1', price: 100, description: 'Description of Product 1' },
//       { id: '2', name: 'Product 2', price: 200, description: 'Description of Product 2' },
//       // 更多数据
//     ]
//   };

//   function UploadData() {
//     const handleUpload = () => {
//       // 将 JSON 数据上传到 Firebase
//       database.ref('data').set(jsonData)
//         .then(() => {
//           console.log('Data uploaded successfully');
//         })
//         .catch((error) => {
//           console.error('Error uploading data:', error);
//         });
//     };
  
//     return (
//       <div>
//         <h1>Upload Data to Firebase</h1>
//         <button onClick={handleUpload}>Upload Data</button>
//       </div>
//     );
//   }

//   export default UploadData;