const { program } = require('commander');
const axios = require('axios');
const uuid = require('uuid');

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  require('dotenv').config();
}

program.version('0.0.1');
program
  .command('moderate')
  .description('Microsoft Azure Cognitive Services Content Moderator')
  .option('-m, --message <msg>', 'the main message')
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

program
  .command('analysis')
  .description('Microsoft Azure Cognitive Services Text Analysis')
  .option('-m, --message <msg>', 'the main message')
  .option('-d, --detect-language', 'enable detects language mount point')
  .option('-e, --entietes', 'enable entietes mount point')
  .option('-k, --key-phrases', 'enable key phrases mount point')
  .option('-s, --sentiment', 'enable sentiment mount point')
  .option('-l, --language <language>', 'what is the language')
  .action(function(cmd){
    let url = process.env.CONTENT_ANALYSIS_URL;
    if (cmd.detect_language){
      url = `${url}/language`;
    }
    if (cmd.entietes){
      url = `${url}/entietes`;
    }
    if (cmd.key_phrases){
      url = `${url}/keyPhrases`;
    }
    if (cmd.sentiment){
      url = `${url}/sentiment`;
    }
    console.log(`POST ${url}`);
    const data = JSON.stringify({
      documents: [
        {
          id: uuid.v4(),
          language: cmd.language,
          text: cmd.message
        }
      ]
    });
    axios({
      method: 'post',
      headers:{
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.OCP_ANALYSIS_KEY
      },
      url: url,
      data: data
    }).then(function(res){
      console.log(`id: ${res.data.documents[0].id}`);
      console.log(`score: ${res.data.documents[0].score}`);
    }).catch(function(err){
      console.log(`Error ${err.response.status}: ${err.response.statusText}`);
    });
  });

program.parse(process.argv);
