// import React from 'react';

// const PersonalizedRecommendations = () => {
//   // Sample personalized recommendations data
//   const recommendations = [
//     { id: 1, name: 'Product 1', imageUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     { id: 2, name: 'Product 2', imageUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     { id: 3, name: 'Product 3', imageUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     // Add more recommendations as needed
//   ];

//   const styles = {
//     personalizedRecommendationsContainer: {
//       textAlign: 'center',
//       padding: '20px',
//     },
//     recommendationsTitle: {
//       fontSize: '1.5em',
//       marginBottom: '20px',
//     },
//     personalizedRecommendations: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     recommendationItem: {
//       margin: '0 10px',
//       opacity: 0,
//       animation: 'fadeIn 1s forwards',
//     },
//   };

//   return (
//     <div style={styles.personalizedRecommendationsContainer}>
//       <h3 style={styles.recommendationsTitle}>Explore Personalized Recommendations</h3>
//       <div style={styles.personalizedRecommendations}>
//         {recommendations.map((recommendation) => (
//           <div key={recommendation.id} style={styles.recommendationItem}>
//             <img src={recommendation.imageUrl} alt={recommendation.name} />
//             <h4>{recommendation.name}</h4>
//           </div>
//         ))}
//       </div>
//       <style>
//         {`
//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default PersonalizedRecommendations;
