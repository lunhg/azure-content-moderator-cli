const { program } = require('commander');
const axios = require('axios');

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  require('dotenv').config();
}

program.version('0.0.1');
program
  .command('run')
  .description('Microsoft Azure Cognitive Services Content Moderator')
  .option('-m, --message <msg>', 'the main m')
  .option('-P, --PII', 'Detects Personal Identifiable Information (PII) in the input')
  .option('-C, --classify', 'Enables Text Classification')
  .option('-L, --language <string>', 'Optional parameter. If no language is specified, it would default to English.')
  .option('-I, --listId <string>', 'Optional parameter. The Term list to be used for matching.')
  .option('-A, --autocorrect', 'Optional parameter. Runs auto correction on the input, before running other operations.')
  .action(function(cmd){
    const url = `${process.env.CONTENT_URL}?classify=${cmd.classify || 'False'}&PII=${cmd.PII || 'False'}&autocorrect=${cmd.autocorrect || 'False'}`
    if (cmd.language){
      url = `${url}&language=${cmd.language}`;
    }
    if (cmd.listId){
      url = `${url}&language=${cmd.listId}`;
    }
    console.log(`POST ${url}`)
    axios({
      method: 'post',
      headers:{
        'Content-Type': 'text/plain',
        'Ocp-Apim-Subscription-Key': process.env.OCP_KEY
      },
      url: url,
      data: cmd.message
    }).then(function(res){
      console.log(res.data);
    });
  });

program.parse(process.argv);
