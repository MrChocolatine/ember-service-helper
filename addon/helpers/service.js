import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';

export default class ServiceHelper extends Helper {

  compute([ name, property ]) {
    const service = getOwner(this).lookup(`service:${name}`);
    assert(`The service '${name}' does not exist`, service);

    return typeof property === 'string'
      ? service.get( property )
      : service
  }

}
