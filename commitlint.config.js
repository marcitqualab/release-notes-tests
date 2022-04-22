module.exports = {

    //extends: ['@commitlint/config-conventional'],

    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
        //'scope-case': [0, 'always', 'lower-case'],
        'subject-case': [0, 'always', 'lower-case'],
        'header-max-length': [2, 'always', 150]
    },

    extends: ['@commitlint/config-conventional'],
};
