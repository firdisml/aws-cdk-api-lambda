async function main(event:any) {
    return {
      body: JSON.stringify([
        {todoId: 1, text: 'walk the dogs 🐕'},
        {todoId: 2, text: 'cook dinners 🥗'},
        {todoId: 2, text: 'cook dinners 🥗'},
        {todoId: 2, text: 'cook dinners 🥗'},
        {todoId: 2, text: 'cook dinners 🥗'},
        {todoId: 2, text: 'cook dinners 🥗'},
      ]),
      statusCode: 200,
    };
  }
  
  module.exports = {main};
  
