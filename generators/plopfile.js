module.exports = plop => {
  plop.setGenerator('components', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.vue',
        templateFile: 'templates/component.vue.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styles.scss',
        templateFile: 'templates/styles.scss.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/spec.ts',
        templateFile: 'templates/spec.ts.hbs',
      },
    ],
  });
};
