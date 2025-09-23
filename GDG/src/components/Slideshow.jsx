// import { useState, useEffect } from "react";

// const CardSlideshow = () => {
//   const cards = [
//     {
//       id: 1,
//       title: "Android",
//       color: "border-t-4 border-green-500",
//       img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.svg",
//     },
//     {
//       id: 2,
//       title: "Flutter",
//       color: "border-t-4 border-blue-500",
//       img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
//     },
//     {
//       id: 3,
//       title: "Cloud",
//       color: "border-t-4 border-red-500",
//       img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="w-full flex justify-center items-center">
//       <div className="relative w-64 h-40 overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className={`w-64 h-40 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center mx-2 ${card.color}`}
//             >
//               <img src={card.img} alt={card.title} className="h-12 mb-2" />
//               <h3 className="text-lg font-semibold">{card.title}</h3>
//               <span className="text-gray-500">▼</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute bottom-0 mt-2 flex space-x-2">
//         {cards.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === index ? "bg-blue-600" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardSlideshow;
