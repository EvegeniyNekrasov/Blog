import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'

/**
 * Compare if the plane text password mathes the hash password
 * @param password Plane text password
 * @param hashPassword Hashed password
 * @returns Promise boolean
 */
export const comparePasswords = (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword)
}

/**
 * Hash plane text password
 * @param password Plane text password
 * @returns Promise string
 */
export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, process.env.SALT_OF_ROUNDS)
}

type UserAuth = {
  id: number
  email: string
}

/**
 * Generate token
 * @param user
 * @returns token string
 */
export const createJWT = (user: UserAuth): string => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET)
}
