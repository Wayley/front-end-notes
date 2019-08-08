// Optional Properties 可选属性
interface UserInfoConfig {
  id: number;
  name?: string;
  age?: number;
}

// class Student(user: UserInfoConfig){
//   let user_ = {
//     id: user.id,
//     name: user.name || '未知',
//     age: user.age || '未知',
//     school:'HUAT'
//   }
//   // return user_
// }
