export function DatepickerDirective() {
  'ngInject';
  let directive = {
    restrict: 'E',
    templateUrl: 'app/directives/datepicker/datepicker.html',
    scope: {
      birthday: '='
    },
    controller: DatepickerController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class DatepickerController {
  constructor(moment) {
    'ngInject';

    this.hours = _.range(1, 13);
    this.minutes = _.range(0, 60, 15);
    this.meridiem = ['AM', 'PM'];
    this.moment = moment;
    this.months = this.moment.months();
    this.years = _.range(+moment().format('YYYY'), +moment().format('YYYY') - 100);
    this.formData = {
      month: this.months[0],
      year: this.years[20],
    };
    this.setDayInMonth();
  }

  setDayInMonth() {
    let dayInMonth = moment().year(this.formData.year).month(this.formData.month).daysInMonth();
    this.days = _.range(1, dayInMonth + 1);
    this.formData.day = this.formData.day || this.days[0];
    this.formData.meridiem = this.formData.meridiem || this.meridiem[0];

    this.setBirthday();
  };
  
  setBirthday() {
    var hour = +moment(`${this.formData.hour} ${this.formData.meridiem}` , ["h A"]).format("HH");

    this.birthday = moment()
    .year(this.formData.year)
    .month(this.formData.month)
    .date(this.formData.day)
    .hours(hour || 0)
    .minute(this.formData.minute || 0)
    .format('YYYY-MM-DD HH:mm');
  }
}
