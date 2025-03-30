import { defineAction } from 'astro:actions';
import { db, User } from 'astro:db';
import { v4 as UUID } from 'uuid'
import { z } from 'astro:schema';
import bcrypt from 'bcryptjs';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
  }),
  handler: async ({ name, email, password }, { cookies }) => {

    const Usuario = {
      name: name,
      email: email,
      password: bcrypt.hashSync( password ),
      role: 'user', // Default role
      id: UUID(), // Generate a unique ID
      createdAt: new Date() // Set the current date
    }


    try {
      await db.insert(User).values(Usuario);

    } catch (error) {
      console.log(error);
    }
    
    
    return { ok: true };
  },
});

