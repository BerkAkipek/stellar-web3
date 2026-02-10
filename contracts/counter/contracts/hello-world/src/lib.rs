#![no_std]

use soroban_sdk::{
    contract, contractimpl, contracterror,
    Env, Address, Symbol
};

#[contract]
pub struct CounterContract;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub enum ContractError {
    NotInitialized = 1,
    Unauthorized = 2,
    InvalidValue = 3,
}

const OWNER: Symbol = Symbol::short("OWNER");
const COUNT: Symbol = Symbol::short("COUNT");

#[contractimpl]
impl CounterContract {

    pub fn init(env: Env, owner: Address) -> Result<(), ContractError> {
        if env.storage().instance().has(&OWNER) {
            return Err(ContractError::InvalidValue);
        }

        env.storage().instance().set(&OWNER, &owner);
        env.storage().instance().set(&COUNT, &0u32);

        env.events().publish(("init",), owner);
        Ok(())
    }

    pub fn increment(env: Env, caller: Address) -> Result<u32, ContractError> {
        if !env.storage().instance().has(&OWNER) {
            return Err(ContractError::NotInitialized);
        }

        let owner: Address = env.storage().instance().get(&OWNER).unwrap();

        caller.require_auth();

        if caller != owner {
            return Err(ContractError::Unauthorized);
        }

        let mut count: u32 = env.storage().instance().get(&COUNT).unwrap();
        count += 1;
        env.storage().instance().set(&COUNT, &count);

        env.events().publish(("increment", caller), count);

        Ok(count)
    }

    pub fn get(env: Env) -> Result<u32, ContractError> {
        if !env.storage().instance().has(&COUNT) {
            return Err(ContractError::NotInitialized);
        }

        Ok(env.storage().instance().get(&COUNT).unwrap())
    }
}
