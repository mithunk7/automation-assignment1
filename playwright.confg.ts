import { PlaywrightTestConfig } from "@playwright/test";
 const config: PlaywrightTestConfig={

    use:{ 
        screenshot:"on",
    },
    testMatch:[],
    reporter :[["dot"],["json",{outputFile:"test-result.json"}],["line"],
    ['experimental-allure-playwright']],

 };
 export default config
