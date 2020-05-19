# Classificar e moderar o texto com o Azure Content Moderator

## install

    git clone https://github.com/lunhg/content-moderator.git
    
## install dependencies

    npm install
    
Or 
   
    yarn install

## configure

Copy `.env.template` file to a `.env` and modify `OCP_KEY` to your Content Manager key

For `CONTENT_URL`, possible values are:


Australia East - australiaeast.api.cognitive.microsoft.com
Brazil South - brazilsouth.api.cognitive.microsoft.com
Canada Central - canadacentral.api.cognitive.microsoft.com
Central India - centralindia.api.cognitive.microsoft.com
Central US - centralus.api.cognitive.microsoft.com 
East Asia - eastasia.api.cognitive.microsoft.com
East US - eastus.api.cognitive.microsoft.com
East US 2 - eastus2.api.cognitive.microsoft.com
France Central - francecentral.api.cognitive.microsoft.com
Japan East - japaneast.api.cognitive.microsoft.com
Japan West - japanwest.api.cognitive.microsoft.com
Korea Central - koreacentral.api.cognitive.microsoft.com
North Central US - northcentralus.api.cognitive.microsoft.com
North Europe - northeurope.api.cognitive.microsoft.com
South Africa North - southafricanorth.api.cognitive.microsoft.com
South Central US - southcentralus.api.cognitive.microsoft.com
Southeast Asia - southeastasia.api.cognitive.microsoft.com
UK South - uksouth.api.cognitive.microsoft.com
West Central US - westcentralus.api.cognitive.microsoft.com
West Europe - westeurope.api.cognitive.microsoft.com
West US - westus.api.cognitive.microsoft.com
West US 2 - westus2.api.cognitive.microsoft.com

## run

    npm test
    
Or

    yarn test
    

Or 

    node bin/content-moderator.js run -m 'this is a fucking shit message, email: test@mail.net phone: 123456789 IP: 127.1.2.3 address: 1, Some adrress, Redmond, WA 98052
    


