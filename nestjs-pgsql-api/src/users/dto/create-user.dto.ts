import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: 'informe o email'})
    email: string;

    @IsNotEmpty({message: 'informe o nome'})
    name: string;

    @IsNotEmpty({message: 'informe a senha'}) 
    password: string;

    @IsNotEmpty({message: 'confirme a senha'})
    passwordConfirmation: string;
}