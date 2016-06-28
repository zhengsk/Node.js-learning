/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

/**
 * @apiDefine LoginParam
 * @apiParam {String} username Your e-mail-address.
 * @apiParam {String} password Your password.
 */

/**
 * @apiDefine UserParam
 * @apiParam {String} firstname Your firstname.
 * @apiParam {String} lastname  Your lastname.
 * @apiParam {Date}   birthday  Your birthday.
 */

/**
 * @api {GET} /account/register Register a new user.
 * @apiUse LoginParam
 * @apiUse UserParam
 * @apiParam {Boolean} terms Checkbox to accept the terms.
 */

/**
 * @api {GET} /account/login Signin with an existing user.
 * @apiUse LoginParam
 * @apiParam {Boolean} rememberme Checkbox to auto-login on revisit.
 */
function function_name(argument) {
	// body...
}