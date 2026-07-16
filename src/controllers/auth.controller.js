import { authService } from "../services/auth.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax",
  secure: false,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const authController = {
  async login(req, res, next) {
    try {
      const { accessToken, refreshToken } = await authService.login(req);

      res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
      res.cookie("accessToken", accessToken, COOKIE_OPTIONS);
      const response = responseSuccess({ accessToken }, `Login successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async register(req, res, next) {
    try {
      const result = await authService.register(req);
      const response = responseSuccess(result, `Register successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async forgotPassword(req, res, next) {
    try {
      const codeChangePass = await authService.forgotPassword(req);
      res.status(200).json({ codeChangePass });
    } catch (error) {
      next(error);
    }
  },

  async getInfo(req, res, next) {
    try {
      const result = await authService.getInfo(req);
      const response = responseSuccess(result, `Get info successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async refreshToken(req, res, next) {
    try {
      const { accessToken, refreshToken } = await authService.refreshToken(req);

      res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
      res.cookie("accessToken", accessToken, COOKIE_OPTIONS);
      const response = responseSuccess({ accessToken }, `Refresh token successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};