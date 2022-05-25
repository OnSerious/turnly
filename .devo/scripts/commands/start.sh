#!/bin/bash

function start() {
  info "Starting Athena in development mode with docker... 🚀 "

  line

  info "Checking available ports... 📡 "
  check_ports "$HTTP_PORT" "$RPC_PORT" "$APP_PROXY_DASHBOARD_PORT"

  info "Copying the yarn.lock to each app... 📝 "
  yarn_lock --copy

  line

  if [[ $* == *"-s"* ]]; then
    while getopts "s:" opt; do
      case $opt in
      s)
        [[ "${EXECUTE_SERVICES[*]}" != *"${OPTARG}"* ]] && EXECUTE_SERVICES+=("${OPTARG}")
        ;;
      \?)
        error "Invalid option: -$OPTARG"
        ;;
      esac
    done

    info "Starting the selected services... 🚀 "
  fi

  info "Setting up docker containers... 🐳 "

  if [[ $* == *"--build"* ]]; then
    setup
    docker_command up --build "${EXECUTE_SERVICES[@]}"
  else
    docker_command up "${EXECUTE_SERVICES[@]}"
  fi

  line

  info "Spinning up all the configured services... 🕓 "
  sleep 6

  print_system_statuses

  info "Starting Athena in development mode with docker... DONE ✅ "

  line
}