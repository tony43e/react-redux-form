import get from './get';
import toPath from './to-path';
import { initialFieldState } from '../reducers/form-reducer';
import getForm from './get-form';

export default function getFieldFromState(state, modelString) {
  const form = getForm(state, modelString);

  if (!form) return null;

  if (!modelString.length) return form;

  const formPath = toPath(form.$form.model);
  const fieldPath = toPath(modelString).slice(formPath.length);

  const field = get(form, fieldPath, initialFieldState);

  if (field && '$form' in field) return field.$form;

  if (!field) return initialFieldState;

  return field;
}
