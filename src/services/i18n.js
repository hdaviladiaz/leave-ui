
export default class i18n {

  static translate(text) {
    switch (text) {
      case 'pending': return 'pendiente';
      case 'approved': return 'aprobada';
      case 'rejected': return 'rechazada';
      case 'taken': return 'tomada';
      case 'not_taken': return 'no tomada';
      default: return text;
    }
  }
}
