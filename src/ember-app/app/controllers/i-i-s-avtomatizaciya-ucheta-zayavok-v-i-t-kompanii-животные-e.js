import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения+клетки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'типКлетки',
            required: true,
            relationName: 'клетки',
            projection: 'КлеткиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения+корма':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'типКорма',
            required: true,
            relationName: 'корма',
            projection: 'КормаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения+вид':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'вид',
            projection: 'ВидL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
