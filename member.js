function skillsMember() {
  const member = require('./member');
  const skills = [
    'ReactJS',
    'NodeJS',
    'VueJS',
    'AngularJS',
    'SvelteJS',
    'EmberJS',
  ];
  return {
    member: member(),
    skills: skills,
  };
}