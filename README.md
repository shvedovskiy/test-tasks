# test-tasks
Тестовые задания Aviasales  [![Build Status](https://travis-ci.org/shvedovskiy/test-tasks.svg?branch=master)](https://travis-ci.org/shvedovskiy/test-tasks)

## Aviasales

*В live demo приложения из-за ограничений 3rd-party сервиса не загружается список валют.*

Код решения расположен по пути `aviasales/solution`.

Для установки требуется наличие:
* `Node`
* `npm`
* `npx`


Установка и развертывание окружения для разработки:
1. `cd aviasales/solution && npm i`
2. `npm run dev:start`
3. `npm run dev:wds` (во втором терминале, не закрывая первый)


Сборка и проверка продакшен-кода:
1. `npm run lint && npm run test`
2. `npm run build`
3. `npm run start`
