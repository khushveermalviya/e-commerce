import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: { username: string; password: string }) {
    // Mock user validation (replace with DB check)
    if (loginDto.username === 'admin' && loginDto.password === 'password') {
      const payload = { username: loginDto.username, sub: 1 };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new Error('Invalid credentials');
  }
}