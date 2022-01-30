/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pazariSidebar: [


    {
      type: 'category',
      label: 'Getting started',
      collapsible: true,
      collapsed: false,
      items: [
       'pazariintro',
       'intro',
       'settingup',
       'buyers'
      ],
    },
    

    {
      type: 'category',
      label: 'Pazari Advantages',
      collapsible: true,
      collapsed: false,
      items: [
        'consumer',
     
       'creators'
      ],
    },


    {
      type: 'category',
      label: 'Pazari Guides',
      collapsible: true,
      collapsed: false,
      items: [
       'forsellers',
       'forbuyers'
      ],
    },


    



    // {
    //   type: 'doc',
    //   id: 'newmerchants', // document id
    //   label: 'How to sell', // sidebar label
    // },



    // {
    //   type: 'doc',
    //   id: 'newmerchants', // document id
    //   label: 'How to sell', // sidebar label
    // },


  
  ],
};

module.exports = sidebars;
