async function main(event:any) {
    return {
      body: JSON.stringify([
        {todoId: 1, text: 'walk the dog 🐕'},
        {todoId: 2, text: 'cook dinner 🥗'},
      ]),
      statusCode: 200,
    };
  }
  
  module.exports = {main};
  