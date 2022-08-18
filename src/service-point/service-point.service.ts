import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicePointDto } from './dto/CreateServicePointDto';
import { ServicePoint } from './entities/service-point.entity';
import { toString as qr} from 'qrcode';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ServicePointService {
  constructor(
    @InjectRepository(ServicePoint)
    private readonly servicePointService: Repository<ServicePoint>
  ){}

  public async create(createServicePointDto: CreateServicePointDto): Promise<ServicePoint>{
    const pointService = this.servicePointService.create(createServicePointDto);
  
    const qrcodeHash = await qr(createServicePointDto.locale);

    console.log(`QRCODE: `+qrcodeHash);

    return this.servicePointService.save({
      id: uuid(),
      latitude: String(pointService.latitude),
      longitude: String(pointService.longitude),
      locale: pointService.locale,
      stats: 'A',
      qrcode: qrcodeHash,
      company_id: pointService.company_id
    })
  }

  public async findAll(): Promise<ServicePoint[]>{
    return await this.servicePointService.find();
  }
}
