import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my-strong-and-wise-secret'
    });
  }

  //JWT and local strategy are working completely individually
  //Local strategy is also storing the object in req.user and
  // also deciding what is going to be stored in payload of jwt
  //take a look in local.strategy to understand

  //this is what is going to be set in req.user
  async validate(payload: any): Promise<any> {
    return { userId: payload.sub, username: payload.username, role: 'admin' };
  }
}
