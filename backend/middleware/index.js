import authUser from "./auth.middleware";
import checkPermission from "./permission.middleware";
import roleMiddleware from "./role.middleware";
import {
  setAccessToken,
  setRefreshToken,
  clearAuthCookies,
  revokeRefreshToken,
  refreshTokenHandler,
  destroySession,
  cookieOpts
}
    from "./token.middleware";

import {sendVerificationEmail, verifyOTP, generateOTP} from "./email.middleware";
import dbMiddleware from "./db.middleware";

export {
    authUser,
    checkPermission,
    roleMiddleware,
    setAccessToken,
    setRefreshToken,
    clearAuthCookies,
    revokeRefreshToken,
    refreshTokenHandler,
    destroySession,
    cookieOpts,
    sendVerificationEmail,
    verifyOTP,
    generateOTP,
    dbMiddleware
};