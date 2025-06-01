import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // API Principal
  const config = new DocumentBuilder()
    .setTitle('Projecto Asistencia Citesoft')
    .setDescription('Documentation of the entire project API')
    .setVersion('1.0')
    .addTag('citesoft')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });

  //Configuración de prefijo global
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    console.log(`Application is running on: http://localhost:${port}/api`);
  });
}

bootstrap().catch((err) => {
  console.error('Error starting the app:', err);
});
