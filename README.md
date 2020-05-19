# Classificar e moderar o texto com o Azure Content Moderator

## install

    git clone https://github.com/lunhg/content-moderator.git
    
## install dependencies

    npm install
    
Or 
   
    yarn install

## configure

Copy `.env.template` file to a `.env` and modify `OCP_KEY` and `CONTENT_URL`

## run

    npm test
    
Or

    yarn test
    

Or 

    node bin/content-moderator.js run -m 'this is a fucking shit message, email: test@mail.net phone: 123456789 IP: 127.1.2.3 address: 1, Some adrress, Redmond, WA 98052
    


