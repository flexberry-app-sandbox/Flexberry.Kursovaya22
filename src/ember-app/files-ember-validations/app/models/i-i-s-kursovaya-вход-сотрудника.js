import {
  defineNamespace,
  defineProjections,
  Model as ВходСотрудникаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-вход-сотрудника';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВходСотрудникаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
