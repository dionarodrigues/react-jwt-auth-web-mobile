import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// DTO (Data Transfer Object)
interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider, date }: RequestDTO): Promise<Appointment> {
    const appointmentsRespository = getCustomRepository(AppointmentsRepository);

    const apointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRespository.findByDate(
      apointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is alread booked');
    }

    const appointment = appointmentsRespository.create({
      provider,
      date: apointmentDate,
    });

    await appointmentsRespository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
