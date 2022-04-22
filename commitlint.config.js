module.exports = {

    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {        
        'subject-case': [0, 'always', 'lower-case'],
        'header-max-length': [2, 'always', 150]
    },

    //extends: ['@commitlint/config-conventional']
    extends: ['./node_modules/cz-conventional-changelog-with-jiraid-detection']
};
