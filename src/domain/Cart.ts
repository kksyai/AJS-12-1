import Buyable from './Buyable';

export default class Cart {
	private items: Buyable[] = []; 
    
	add(item: Buyable): void { 
		this.items.push(item);
	}

	getAll (): Buyable[] { 
		return [...this.items];
	}
	totalCost(): number {
		return this.items.reduce((sum, item) => sum + item.price, 0);
	}

	discoundValue(discount: number): number {
		return this.totalCost()*(1 - discount * 0.01);
	}

	delateItem(id: number): void {
		this.items.splice(id, 1);
	}
}
