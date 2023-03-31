export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
  name: string;
  baseEndpoint?= '/api/auth/';
  login?: boolean | NbPasswordStrategyModule = {
    alwaysFail: false,
    endpoint: 'login',
    method: 'post',
    requireValidToken: true,
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Login/Email combination is not correct, please try again.'],
    defaultMessages: ['You have been successfully logged in.'],
  };
  register?: boolean | NbPasswordStrategyModule = {
    alwaysFail: false,
    endpoint: 'register',
    method: 'post',
    requireValidToken: true,
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully registered.'],
  };
  requestPass?: boolean | NbPasswordStrategyModule = {
    endpoint: 'request-pass',
    method: 'post',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Reset password instructions have been sent to your email.'],
  };
  resetPass?: boolean | NbPasswordStrategyReset = {
    endpoint: 'reset-pass',
    method: 'put',
    redirect: {
      success: '/',
      failure: null,
    },
    resetPasswordTokenKey: 'reset_password_token',
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Your password has been successfully changed.'],
  };
  logout?: boolean | NbPasswordStrategyReset = {
    alwaysFail: false,
    endpoint: 'logout',
    method: 'delete',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully logged out.'],
  };
  refreshToken?: boolean | NbPasswordStrategyModule = {
    endpoint: 'refresh-token',
    method: 'post',
    requireValidToken: true,
    redirect: {
      success: null,
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Your token has been successfully refreshed.'],
  };
  token?: NbPasswordStrategyToken = {
    class: NbAuthSimpleToken,
    key: 'data.token',
    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
      res.body,
      options.token.key,
    ),
  };
  errors?: NbPasswordStrategyMessage = {
    key: 'data.errors',
    getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
      res.error,
      options.errors.key,
      options[module].defaultErrors,
    ),
  };
  messages?: NbPasswordStrategyMessage = {
    key: 'data.messages',
    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
      res.body,
      options.messages.key,
      options[module].defaultMessages,
    ),
  };
  validation?: {
    password?: {
      required?: boolean;
      minLength?: number | null;
      maxLength?: number | null;
      regexp?: string | null;
    };
    email?: {
      required?: boolean;
      regexp?: string | null;
    };
    fullName?: {
      required?: boolean;
      minLength?: number | null;
      maxLength?: number | null;
      regexp?: string | null;
    };
  };
}


export enum NbOAuth2ResponseType {
  CODE = 'code',
  TOKEN = 'token',
}

export enum NbOAuth2GrantType {
  AUTHORIZATION_CODE = 'authorization_code',
  PASSWORD = 'password',
  REFRESH_TOKEN = 'refresh_token',
}

export class NbOAuth2AuthStrategyOptions {
  name: string;
  baseEndpoint?: string = '';
  clientId: string = '';
  clientSecret: string = '';
  clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
  redirect?: { success?: string; failure?: string } = {
    success: '/',
    failure: null,
  };
  defaultErrors?: any[] = ['Something went wrong, please try again.'];
  defaultMessages?: any[] = ['You have been successfully authenticated.'];
  authorize?: {
    endpoint?: string;
    redirectUri?: string;
    responseType?: string;
    requireValidToken: true,
    scope?: string;
    state?: string;
    params?: { [key: string]: string };
  } = {
      endpoint: 'authorize',
      responseType: NbOAuth2ResponseType.CODE,
    };
  token?: {
    endpoint?: string;
    grantType?: string;
    requireValidToken: true,
    redirectUri?: string;
    scope?: string;
    class: NbAuthTokenClass,
  } = {
      endpoint: 'token',
      grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
      class: NbAuthOAuth2Token,
    };
  refresh?: {
    endpoint?: string;
    grantType?: string;
    scope?: string;
    requireValidToken: true,
  } = {
      endpoint: 'token',
      grantType: NbOAuth2GrantType.REFRESH_TOKEN,
    };
}