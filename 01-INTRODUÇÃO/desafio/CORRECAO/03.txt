function temHabilidade(skills) {
  return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));