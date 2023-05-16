/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BanknotesIcon,
  CalendarIcon,
  ChartBarIcon,
  CalculatorIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const sap = [
  {
    name: 'Treinamento Add-on Taxplus NFe',
    description: 'Treinamento completo de Taxplus NFe.',
    href: '/aula/3',
    icon: ChartBarIcon
  },
  {
    name: 'Determinação De Código de imposto',
    description: 'Aprenda a fazer determinação de código de imposto.',
    href: '/aula/1',
    icon: CalculatorIcon
  },
  {
    name: 'Códigos de imposto',
    description: 'Aprenda a criar os códigos de imposto da forma correta.',
    href: '/aula/19',
    icon: BanknotesIcon
  },
  {
    name: 'Recebimento de mercadorias',
    description:
      'Como fazer o recebimento de mercadorias no padrão da empresa.',
    href: '/aula/13',
    icon: Squares2X2Icon
  }
]

const resources = [
  {
    name: 'Pesagem',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon
  },
  {
    name: 'lorem',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon
  },
  {
    name: 'lorem',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon
  },
  {
    name: 'lorem',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const logout = function (e) {
  localStorage.clear()
}

const Navbar = () => {
  return (
    <Popover className="relative bg-white border-b-2 border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl">
              Educ
              <span className="text-red-600 text-2xl font-bold">Ativus</span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-stone-900' : 'text-stone-600',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-stone-900'
                    )}
                  >
                    <span>SAP</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {sap.map(item => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-red-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-stone-900' : 'text-stone-600',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-stone-900'
                    )}
                  >
                    <span>Ativus Cargas</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1 z-10 mt-3  w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map(item => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              <>
                <a
                  href="http://10.42.42.100/agenda"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    'text-stone-900 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-stone-900'
                  }
                >
                  <span>Ramais</span>
                </a>
              </>
            </Popover>
            <Popover className="relative">
              <>
                <a
                  href="http://10.42.42.100/glpi"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    'text-stone-900 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-stone-900'
                  }
                >
                  <span>GLPI</span>
                </a>
              </>
            </Popover>
            <Popover className="relative">
              <>
                {localStorage.getItem('token') ? (
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </>
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className="text-2xl">
                    Educ
                    <span className="text-red-600 text-2xl font-bold">
                      Ativus
                    </span>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/treinamentos"
                >
                  Treinamentos
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="http://10.42.42.100/agenda"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agenda
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="http://10.42.42.100/glpi"
                  target="_blank"
                  rel="noreferrer"
                >
                  GLPI
                </Link>
              </div>
              <div className="mt-6">
                {localStorage.getItem('token') ? (
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
