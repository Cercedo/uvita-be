import { ServiceInterface } from '@/features/interfaces';

class GeneratePatientCodeService implements ServiceInterface<void, string> {
  public execute(): string {
    const [section, counter] = this.getLastCode().split('-');

    const code = this.generateCode(section, counter);

    return code;
  }

  private getLastCode(): string {
    return '000-000000';
  }

  private generateCode(section: string, _counter: string): string {
    const counterInteger = Math.floor(Math.random() * 1000000);

    const nextCounter = counterInteger.toString().padStart(6, '0');

    return `${section}-${nextCounter}`;
  }
}

export default GeneratePatientCodeService;
