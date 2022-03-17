import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const port = config.get('APP_PORT')
  const uri = config.get('APP_SERVER_URI')

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('APP')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  await app.listen(port, () => console.log(uri))
}
bootstrap()
