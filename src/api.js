// export const getComments = async () => {
//   return [
//     {
//       id: "1",
//       //taskId: "2",
//       body: "First comment",
//       name: "Jack",
//       userId: "1",
//       parentId: null,
//       createdAt: "1/21/2022, 9:04:34 AM",
//     },
//     {
//       id: "2",
//      // taskId: "2",
//       body: "Second comment",
//       name: "John",
//       userId: "2",
//       parentId: null,
//       createdAt: "2/10/2022, 9:04:34 AM",
//     },
//     {
//       id: "3",
//      // taskId: "2",
//       body: "First comment first child",
//       name: "John",
//       userId: "2",
//       parentId: "1",
//       createdAt: "2/25/2022, 11:24:34 PM",
//     },
//     {
//       id: "4",
//       //taskId: "2",
//       body: "Second comment second child",
//       name: "John",
//       userId: "2",
//       parentId: "2",
//       createdAt: "6/09/2022, 6:14:14 AM",
//     },
//   ];
// };

// export const createComment = async (text, parentId = null) => {
//   return {
//     id: Math.random().toString(36).substr(2, 9),
//     body: text,
//     parentId,
//     userId: "1",
//     name: "John",
//     createdAt:new Date().toLocaleString(),
//   };
// };

// export const updateComment = async (text) => {
//   return { text };
// };

// export const deleteComment = async () => {
//   return {};
// };