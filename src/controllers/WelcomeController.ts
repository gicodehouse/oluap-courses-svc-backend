import { Controller, Get } from "@nestjs/common";


@Controller('/welcome')
class WelcomeController {
      @Get('')
      async test(){
        return "HELLO WORLD!";
      }
}

export default WelcomeController;