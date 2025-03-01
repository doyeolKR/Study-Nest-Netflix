import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 것이 입력은 되지만, 필터링되어서 클라이언트에 반환되지는 않음
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 것은 입력이 되지 않고, 에러 발생
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
