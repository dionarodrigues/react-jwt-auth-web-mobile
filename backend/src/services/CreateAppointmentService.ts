import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// DTO (Data Transfer Object)
interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: RequestDTO): Appointment {
    const apointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      apointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is alread booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: apointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
