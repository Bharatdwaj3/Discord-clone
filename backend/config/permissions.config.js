const PERMISSIONS = {
  admin: [
    // users / profiles
    'list_users',
    'view_profile',
    'edit_profile',
    'remove_user',

    // content
    'list_content',
    'view_content',
    'publish_content',
    'edit_content',
    'remove_content',

    // categories
    'list_categories',
    'add_category',
    'edit_category',
    'remove_category'
  ],

  creator: [
    // content (ownership enforced in logic)
    'list_content',
    'view_content',
    'publish_content',
    'edit_content',
    'remove_content',

    // self
    'view_profile',
    'edit_profile',

    'deactivate_account'
  ],

  reader: [
    // content
    'list_content',
    'view_content',

    // self
    'view_profile',
    'edit_profile',

  ]
};

module.exports = PERMISSIONS;
