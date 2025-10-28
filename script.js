// Global booking data
let bookingData = {
    room: null,
    date: null,
    time: null,
    duration: null,
    guests: null,
    food: [],
    customizations: [],
    paymentStatus: 'pending',
    orderStatus: 'pending',
    customerId: null,
    id: null
};

// Enhanced admin data with comprehensive dummy data
let adminData = {
    bookings: [
        {
            id: 'BK001',
            customer: 'John Doe',
            customerId: 'C001',
            room: 'Standard Room',
            date: '2024-01-15',
            time: '19:00',
            duration: 2,
            guests: 4,
            status: 'confirmed',
            total: 99.50,
            paymentStatus: 'paid',
            orderStatus: 'preparing',
            customizations: ['Extra microphone', 'Birthday decorations'],
            food: [
                { name: 'Chicken Wings', price: 12, quantity: 2, total: 24, status: 'preparing' },
                { name: 'Soft Drinks', price: 3.5, quantity: 4, total: 14, status: 'ready' },
                { name: 'French Fries', price: 6.5, quantity: 1, total: 6.5, status: 'pending' }
            ],
            roomPrice: 50,
            serviceFee: 5,
            createdAt: '2024-01-10T14:30:00'
        },
        {
            id: 'BK002',
            customer: 'Jane Smith',
            customerId: 'C002',
            room: 'Premium Room',
            date: '2024-01-16',
            time: '20:00',
            duration: 3,
            guests: 6,
            status: 'pending',
            total: 185.00,
            paymentStatus: 'pending',
            orderStatus: 'pending',
            customizations: ['Special lighting'],
            food: [
                { name: 'Margherita Pizza', price: 14, quantity: 1, total: 14, status: 'pending' },
                { name: 'Fruit Smoothie', price: 6.5, quantity: 2, total: 13, status: 'pending' },
                { name: 'Spring Rolls', price: 8.5, quantity: 2, total: 17, status: 'pending' }
            ],
            roomPrice: 120,
            serviceFee: 5,
            createdAt: '2024-01-11T10:15:00'
        },
        {
            id: 'BK003',
            customer: 'Mike Johnson',
            customerId: 'C003',
            room: 'VIP Suite',
            date: '2024-01-14',
            time: '18:00',
            duration: 2,
            guests: 8,
            status: 'cancelled',
            total: 125.00,
            paymentStatus: 'refunded',
            orderStatus: 'cancelled',
            customizations: ['VIP treatment', 'Champagne service'],
            food: [
                { name: 'Beef Burger', price: 16.5, quantity: 2, total: 33, status: 'cancelled' }
            ],
            roomPrice: 120,
            serviceFee: 5,
            createdAt: '2024-01-08T16:45:00'
        },
        {
            id: 'BK004',
            customer: 'Sarah Wilson',
            customerId: 'C004',
            room: 'Standard Room',
            date: '2024-01-17',
            time: '21:00',
            duration: 2,
            guests: 5,
            status: 'confirmed',
            total: 74.50,
            paymentStatus: 'paid',
            orderStatus: 'ready',
            customizations: ['Extra ketchup'],
            food: [
                { name: 'Beef Burger', price: 16.5, quantity: 1, total: 16.5, status: 'ready' },
                { name: 'French Fries', price: 6.5, quantity: 2, total: 13, status: 'ready' }
            ],
            roomPrice: 50,
            serviceFee: 5,
            createdAt: '2024-01-12T09:20:00'
        },
        {
            id: 'BK005',
            customer: 'David Brown',
            customerId: 'C005',
            room: 'Premium Room',
            date: '2024-01-18',
            time: '19:30',
            duration: 4,
            guests: 8,
            status: 'confirmed',
            total: 225.00,
            paymentStatus: 'paid',
            orderStatus: 'delivered',
            customizations: ['Cake service', 'Birthday song'],
            food: [
                { name: 'Chicken Wings', price: 12, quantity: 3, total: 36, status: 'delivered' },
                { name: 'Spring Rolls', price: 8.5, quantity: 2, total: 17, status: 'delivered' }
            ],
            roomPrice: 160,
            serviceFee: 5,
            createdAt: '2024-01-13T11:30:00'
        },
        {
            id: 'BK006',
            customer: 'Lisa Chen',
            customerId: 'C006',
            room: 'Standard Room',
            date: '2024-01-19',
            time: '17:00',
            duration: 2,
            guests: 3,
            status: 'completed',
            total: 68.00,
            paymentStatus: 'paid',
            orderStatus: 'delivered',
            customizations: [],
            food: [
                { name: 'Margherita Pizza', price: 14, quantity: 1, total: 14, status: 'delivered' },
                { name: 'Soft Drinks', price: 3.5, quantity: 2, total: 7, status: 'delivered' }
            ],
            roomPrice: 50,
            serviceFee: 5,
            createdAt: '2024-01-14T14:20:00'
        },
        {
            id: 'BK007',
            customer: 'Robert Taylor',
            customerId: 'C007',
            room: 'VIP Suite',
            date: '2024-01-20',
            time: '20:30',
            duration: 3,
            guests: 10,
            status: 'confirmed',
            total: 245.50,
            paymentStatus: 'paid',
            orderStatus: 'preparing',
            customizations: ['Corporate event setup'],
            food: [
                { name: 'Chicken Wings', price: 12, quantity: 4, total: 48, status: 'preparing' },
                { name: 'Beef Burger', price: 16.5, quantity: 3, total: 49.5, status: 'preparing' },
                { name: 'Soft Drinks', price: 3.5, quantity: 6, total: 21, status: 'ready' }
            ],
            roomPrice: 180,
            serviceFee: 5,
            createdAt: '2024-01-15T08:45:00'
        },
        {
            id: 'BK008',
            customer: 'Emily Davis',
            customerId: 'C008',
            room: 'Premium Room',
            date: '2024-01-21',
            time: '19:00',
            duration: 2,
            guests: 7,
            status: 'pending',
            total: 132.00,
            paymentStatus: 'pending',
            orderStatus: 'pending',
            customizations: ['Anniversary decorations'],
            food: [
                { name: 'Spring Rolls', price: 8.5, quantity: 2, total: 17, status: 'pending' },
                { name: 'Fruit Smoothie', price: 6.5, quantity: 3, total: 19.5, status: 'pending' }
            ],
            roomPrice: 80,
            serviceFee: 5,
            createdAt: '2024-01-16T13:10:00'
        },
        {
            id: 'BK009',
            customer: 'Michael Wilson',
            customerId: 'C009',
            room: 'Standard Room',
            date: '2024-01-22',
            time: '18:30',
            duration: 2,
            guests: 4,
            status: 'confirmed',
            total: 89.00,
            paymentStatus: 'paid',
            orderStatus: 'ready',
            customizations: [],
            food: [
                { name: 'Chicken Wings', price: 12, quantity: 2, total: 24, status: 'ready' },
                { name: 'French Fries', price: 6.5, quantity: 2, total: 13, status: 'ready' },
                { name: 'Soft Drinks', price: 3.5, quantity: 4, total: 14, status: 'ready' }
            ],
            roomPrice: 50,
            serviceFee: 5,
            createdAt: '2024-01-17T10:30:00'
        },
        {
            id: 'BK010',
            customer: 'Jessica Martinez',
            customerId: 'C010',
            room: 'VIP Suite',
            date: '2024-01-23',
            time: '21:00',
            duration: 4,
            guests: 12,
            status: 'confirmed',
            total: 325.75,
            paymentStatus: 'paid',
            orderStatus: 'preparing',
            customizations: ['Bachelorette party setup', 'Special playlist'],
            food: [
                { name: 'Margherita Pizza', price: 14, quantity: 3, total: 42, status: 'preparing' },
                { name: 'Chicken Wings', price: 12, quantity: 5, total: 60, status: 'preparing' },
                { name: 'Fruit Smoothie', price: 6.5, quantity: 6, total: 39, status: 'pending' }
            ],
            roomPrice: 240,
            serviceFee: 5,
            createdAt: '2024-01-18T15:20:00'
        }
    ],
    rooms: [
        {
            id: 'R001',
            name: 'Standard Room',
            type: 'standard',
            capacity: 6,
            price: 25,
            amenities: ['2 Microphones', 'Basic Sound System', 'Comfortable Seating'],
            images: ['https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'],
            status: 'available'
        },
        {
            id: 'R002',
            name: 'Premium Room',
            type: 'premium',
            capacity: 10,
            price: 40,
            amenities: ['4 Microphones', 'Premium Sound System', 'LED Lighting', 'Private Bar'],
            images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'],
            status: 'available'
        },
        {
            id: 'R003',
            name: 'VIP Suite',
            type: 'vip',
            capacity: 15,
            price: 60,
            amenities: ['6 Microphones', 'Professional Sound System', 'Stage Lighting', 'VIP Seating', 'Private Restroom'],
            images: ['https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'],
            status: 'maintenance'
        }
    ],
    customers: [
        {
            id: 'C001',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+1234567890',
            bookings: 5,
            joinDate: '2023-05-15',
            status: 'active'
        },
        {
            id: 'C002',
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '+1234567891',
            bookings: 3,
            joinDate: '2023-08-22',
            status: 'active'
        },
        {
            id: 'C003',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            phone: '+1234567892',
            bookings: 7,
            joinDate: '2023-03-10',
            status: 'active'
        },
        {
            id: 'C004',
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            phone: '+1234567893',
            bookings: 4,
            joinDate: '2023-06-18',
            status: 'active'
        },
        {
            id: 'C005',
            name: 'David Brown',
            email: 'david@example.com',
            phone: '+1234567894',
            bookings: 6,
            joinDate: '2023-04-25',
            status: 'inactive'
        },
        {
            id: 'C006',
            name: 'Lisa Chen',
            email: 'lisa@example.com',
            phone: '+1234567895',
            bookings: 2,
            joinDate: '2023-09-12',
            status: 'active'
        },
        {
            id: 'C007',
            name: 'Robert Taylor',
            email: 'robert@example.com',
            phone: '+1234567896',
            bookings: 8,
            joinDate: '2023-02-28',
            status: 'active'
        },
        {
            id: 'C008',
            name: 'Emily Davis',
            email: 'emily@example.com',
            phone: '+1234567897',
            bookings: 3,
            joinDate: '2023-11-05',
            status: 'active'
        },
        {
            id: 'C009',
            name: 'Michael Wilson',
            email: 'michael@example.com',
            phone: '+1234567898',
            bookings: 4,
            joinDate: '2023-07-22',
            status: 'active'
        },
        {
            id: 'C010',
            name: 'Jessica Martinez',
            email: 'jessica@example.com',
            phone: '+1234567899',
            bookings: 2,
            joinDate: '2023-10-15',
            status: 'active'
        }
    ],
    reports: {
        monthlyRevenue: [
            { month: 'Jan', revenue: 2850 },
            { month: 'Feb', revenue: 3200 },
            { month: 'Mar', revenue: 2950 },
            { month: 'Apr', revenue: 4100 },
            { month: 'May', revenue: 3800 },
            { month: 'Jun', revenue: 4500 }
        ],
        roomPerformance: [
            { room: 'Standard Room', bookings: 45, revenue: 1125 },
            { room: 'Premium Room', bookings: 32, revenue: 1280 },
            { room: 'VIP Suite', bookings: 18, revenue: 1080 }
        ],
        peakHours: [
            { hour: '18:00', bookings: 25 },
            { hour: '19:00', bookings: 42 },
            { hour: '20:00', bookings: 38 },
            { hour: '21:00', bookings: 28 },
            { hour: '22:00', bookings: 15 }
        ],
        customerStats: {
            totalCustomers: 156,
            newThisMonth: 23,
            returningRate: '68%',
            averageBookings: 3.2
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load booking data from session storage
    const savedBooking = sessionStorage.getItem('karaokeBooking');
    if (savedBooking) {
        bookingData = JSON.parse(savedBooking);
    }
    
    // Initialize room selection if on booking page
    if (document.querySelector('.room-selection')) {
        initRoomSelection();
    }
    
    // Initialize food ordering if on food page
    if (document.querySelector('.food-menu')) {
        initFoodOrdering();
    }
    
    // Initialize date picker
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        if (!bookingData.date) {
            dateInput.value = today;
            bookingData.date = today;
        } else {
            dateInput.value = bookingData.date;
        }
        
        dateInput.addEventListener('change', function() {
            bookingData.date = this.value;
            saveBookingData();
        });
    }
    
    // Initialize time selection
    const timeSelect = document.getElementById('time');
    if (timeSelect) {
        if (bookingData.time) {
            timeSelect.value = bookingData.time;
        }
        
        timeSelect.addEventListener('change', function() {
            bookingData.time = this.value;
            saveBookingData();
        });
    }
    
    // Initialize duration selection
    const durationSelect = document.getElementById('duration');
    if (durationSelect) {
        if (bookingData.duration) {
            durationSelect.value = bookingData.duration;
        }
        
        durationSelect.addEventListener('change', function() {
            bookingData.duration = this.value;
            saveBookingData();
        });
    }
    
    // Initialize guests input
    const guestsInput = document.getElementById('guests');
    if (guestsInput) {
        if (bookingData.guests) {
            guestsInput.value = bookingData.guests;
        } else {
            guestsInput.value = 4;
            bookingData.guests = 4;
        }
        
        guestsInput.addEventListener('change', function() {
            bookingData.guests = parseInt(this.value);
            saveBookingData();
        });
    }
    
    // Update progress bar based on current page
    updateProgressBar();
    
    // Initialize admin functionality
    initAdmin();
    
    // Initialize booking details
    initBookingDetails();
    
    // Initialize enhanced features
    initEnhancedFeatures();
});

// Initialize room selection functionality
function initRoomSelection() {
    const roomCards = document.querySelectorAll('.room-card');
    
    // Select the previously selected room if any
    if (bookingData.room) {
        roomCards.forEach(card => {
            if (card.getAttribute('data-room') === bookingData.room) {
                card.classList.add('selected');
            }
        });
    }
    
    roomCards.forEach(card => {
        card.addEventListener('click', function() {
            roomCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            bookingData.room = this.getAttribute('data-room');
            saveBookingData();
        });
    });
}

// Initialize food ordering functionality
function initFoodOrdering() {
    // Food Category Filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const foodItems = document.querySelectorAll('.food-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            foodItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Quantity Controls
    const quantityControls = document.querySelectorAll('.quantity-controls');
    
    // Initialize quantities from booking data
    quantityControls.forEach(control => {
        const foodItem = control.closest('.food-item');
        const foodName = foodItem.querySelector('h3').textContent;
        
        // Check if this food is already in the cart
        const existingItem = bookingData.food.find(item => item.name === foodName);
        if (existingItem) {
            control.querySelector('.quantity').textContent = existingItem.quantity;
        }
    });
    
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const quantityDisplay = control.querySelector('.quantity');
        const foodItem = control.closest('.food-item');
        const foodName = foodItem.querySelector('h3').textContent;
        const foodPrice = parseFloat(foodItem.querySelector('.price').textContent.replace('$', ''));
        
        minusBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity;
                updateFoodCart(foodName, foodPrice, quantity);
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityDisplay.textContent);
            quantity++;
            quantityDisplay.textContent = quantity;
            updateFoodCart(foodName, foodPrice, quantity);
        });
    });
    
    // Render initial cart
    renderFoodCart();
}

// Update food cart in booking data
function updateFoodCart(name, price, quantity) {
    // Remove item if quantity is 0
    if (quantity === 0) {
        bookingData.food = bookingData.food.filter(item => item.name !== name);
    } else {
        // Check if item already in cart
        const existingItemIndex = bookingData.food.findIndex(item => item.name === name);
        
        if (existingItemIndex !== -1) {
            // Update quantity
            bookingData.food[existingItemIndex].quantity = quantity;
            bookingData.food[existingItemIndex].total = price * quantity;
        } else {
            // Add new item
            bookingData.food.push({
                name: name,
                price: price,
                quantity: quantity,
                total: price * quantity
            });
        }
    }
    
    saveBookingData();
    renderFoodCart();
}

// Render food cart
function renderFoodCart() {
    const cartItems = document.getElementById('cart-items');
    const itemCount = document.getElementById('item-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    
    // Clear cart display
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (bookingData.food.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 20px;">Your cart is empty</p>';
            itemCount.textContent = '0 items';
            cartSubtotal.textContent = '$0.00';
            cartTotal.textContent = '$5.00';
            return;
        }
        
        // Calculate total items and total price
        let totalItems = 0;
        let subtotal = 0;
        
        // Add each item to cart display
        bookingData.food.forEach(item => {
            totalItems += item.quantity;
            subtotal += item.total;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-details">
                    <div class="cart-item-image"></div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
                    </div>
                </div>
                <div class="cart-item-price">$${item.total.toFixed(2)}</div>
            `;
            
            cartItems.appendChild(cartItemElement);
        });
        
        const serviceFee = 5.00;
        const total = subtotal + serviceFee;
        
        // Update cart summary
        itemCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Save booking data to session storage
function saveBookingData() {
    sessionStorage.setItem('karaokeBooking', JSON.stringify(bookingData));
}

// Clear booking data (for testing)
function clearBookingData() {
    sessionStorage.removeItem('karaokeBooking');
    bookingData = {
        room: null,
        date: null,
        time: null,
        duration: null,
        guests: null,
        food: [],
        customizations: [],
        paymentStatus: 'pending',
        orderStatus: 'pending',
        customerId: null,
        id: null
    };
}

// Update progress bar based on current page
function updateProgressBar() {
    const currentPage = window.location.pathname.split('/').pop();
    const progressSteps = document.querySelectorAll('.progress-step');
    
    if (progressSteps.length > 0) {
        progressSteps.forEach(step => {
            step.classList.remove('active', 'completed');
        });
        
        if (currentPage === 'booking.html') {
            progressSteps[0].classList.add('active');
        } else if (currentPage === 'food.html') {
            progressSteps[0].classList.add('completed');
            progressSteps[1].classList.add('active');
        } else if (currentPage === 'payment.html') {
            progressSteps[0].classList.add('completed');
            progressSteps[1].classList.add('completed');
            progressSteps[2].classList.add('active');
        } else if (currentPage === 'confirmation.html') {
            progressSteps[0].classList.add('completed');
            progressSteps[1].classList.add('completed');
            progressSteps[2].classList.add('completed');
            progressSteps[3].classList.add('active');
            
            // Populate confirmation details
            populateConfirmationDetails();
        }
    }
}

// Populate confirmation page with booking details
function populateConfirmationDetails() {
    // Room details
    const roomDetails = document.getElementById('room-details');
    if (roomDetails && bookingData.room) {
        let roomName = '';
        let roomPrice = 0;
        
        switch(bookingData.room) {
            case 'standard':
                roomName = 'Standard Room';
                roomPrice = 25;
                break;
            case 'premium':
                roomName = 'Premium Room';
                roomPrice = 40;
                break;
            case 'vip':
                roomName = 'VIP Suite';
                roomPrice = 60;
                break;
        }
        
        const duration = bookingData.duration ? parseInt(bookingData.duration) : 1;
        const roomTotal = roomPrice * duration;
        
        roomDetails.innerHTML = `
            <div class="detail-row">
                <span>${roomName}</span>
                <span>$${roomPrice}/hour</span>
            </div>
            <div class="detail-row">
                <span>Duration</span>
                <span>${duration} hour${duration > 1 ? 's' : ''}</span>
            </div>
            <div class="detail-row">
                <span>Room Total</span>
                <span>$${roomTotal}</span>
            </div>
        `;
    }
    
    // Food details
    const foodDetails = document.getElementById('food-details');
    if (foodDetails) {
        if (bookingData.food.length === 0) {
            foodDetails.innerHTML = '<p>No food items ordered</p>';
        } else {
            let foodHTML = '';
            let foodTotal = 0;
            
            bookingData.food.forEach(item => {
                foodHTML += `
                    <div class="detail-row">
                        <span>${item.name} (x${item.quantity})</span>
                        <span>$${item.total.toFixed(2)}</span>
                    </div>
                `;
                foodTotal += item.total;
            });
            
            foodHTML += `
                <div class="detail-row">
                    <span><strong>Food Total</strong></span>
                    <span><strong>$${foodTotal.toFixed(2)}</strong></span>
                </div>
            `;
            
            foodDetails.innerHTML = foodHTML;
        }
    }
    
    // Customizations details
    const customizationsDetails = document.getElementById('customizations-details');
    if (customizationsDetails) {
        if (bookingData.customizations && bookingData.customizations.length > 0) {
            let customHTML = '';
            
            bookingData.customizations.forEach(custom => {
                customHTML += `
                    <div class="detail-row">
                        <span>${custom}</span>
                        <span>Included</span>
                    </div>
                `;
            });
            
            customizationsDetails.innerHTML = customHTML;
        } else {
            customizationsDetails.innerHTML = '<p>No customizations</p>';
        }
    }
    
    // Booking summary
    const bookingSummary = document.getElementById('booking-summary');
    if (bookingSummary) {
        let roomName = '';
        let roomPrice = 0;
        
        switch(bookingData.room) {
            case 'standard':
                roomName = 'Standard Room';
                roomPrice = 25;
                break;
            case 'premium':
                roomName = 'Premium Room';
                roomPrice = 40;
                break;
            case 'vip':
                roomName = 'VIP Suite';
                roomPrice = 60;
                break;
        }
        
        const duration = bookingData.duration ? parseInt(bookingData.duration) : 1;
        const roomTotal = roomPrice * duration;
        
        let foodTotal = 0;
        bookingData.food.forEach(item => {
            foodTotal += item.total;
        });
        
        const serviceFee = 5.00;
        const grandTotal = roomTotal + foodTotal + serviceFee;
        
        bookingSummary.innerHTML = `
            <div class="detail-row">
                <span>Date & Time</span>
                <span>${bookingData.date} at ${bookingData.time}</span>
            </div>
            <div class="detail-row">
                <span>Duration</span>
                <span>${duration} hour${duration > 1 ? 's' : ''}</span>
            </div>
            <div class="detail-row">
                <span>Guests</span>
                <span>${bookingData.guests}</span>
            </div>
            <div class="detail-row">
                <span>Room</span>
                <span>${roomName}</span>
            </div>
            <div class="detail-row">
                <span>Room Cost</span>
                <span>$${roomTotal}</span>
            </div>
            <div class="detail-row">
                <span>Food & Drinks</span>
                <span>$${foodTotal.toFixed(2)}</span>
            </div>
            <div class="detail-row">
                <span>Service Fee</span>
                <span>$${serviceFee.toFixed(2)}</span>
            </div>
            <div class="detail-row summary-total">
                <span>Total</span>
                <span>$${grandTotal.toFixed(2)}</span>
            </div>
        `;
    }
}

// Validate booking before proceeding to food page
function validateBooking() {
    if (!bookingData.room) {
        alert('Please select a room');
        return false;
    }
    if (!bookingData.date) {
        alert('Please select a date');
        return false;
    }
    if (!bookingData.time) {
        alert('Please select a time');
        return false;
    }
    if (!bookingData.duration) {
        alert('Please select duration');
        return false;
    }
    return true;
}

// Admin functionality
function initAdmin() {
    if (document.querySelector('.admin-container')) {
        loadAdminDashboard();
        setupAdminEventListeners();
        renderReports();
    }
}

// Load admin dashboard data
function loadAdminDashboard() {
    updateAdminStats();
    renderBookingsTable();
    renderRoomsTable();
    renderCustomersTable();
    renderOrdersSection();
}

// Update admin statistics
function updateAdminStats() {
    const totalBookings = adminData.bookings.length;
    const totalRevenue = adminData.bookings
        .filter(booking => booking.status === 'confirmed' && booking.paymentStatus === 'paid')
        .reduce((sum, booking) => sum + booking.total, 0);
    const activeRooms = adminData.rooms.filter(room => room.status === 'available').length;
    const totalCustomers = adminData.customers.length;
    const pendingOrders = adminData.bookings.filter(booking => 
        booking.orderStatus === 'pending' || booking.orderStatus === 'preparing'
    ).length;
    const activeOrders = adminData.bookings.filter(booking => 
        booking.orderStatus !== 'cancelled' && booking.orderStatus !== 'delivered'
    ).length;

    if (document.getElementById('total-bookings')) {
        document.getElementById('total-bookings').textContent = totalBookings;
    }
    if (document.getElementById('total-revenue')) {
        document.getElementById('total-revenue').textContent = `$${totalRevenue.toFixed(2)}`;
    }
    if (document.getElementById('active-rooms')) {
        document.getElementById('active-rooms').textContent = activeRooms;
    }
    if (document.getElementById('total-customers')) {
        document.getElementById('total-customers').textContent = totalCustomers;
    }
    if (document.getElementById('pending-orders')) {
        document.getElementById('pending-orders').textContent = pendingOrders;
    }
    if (document.getElementById('active-orders')) {
        document.getElementById('active-orders').textContent = activeOrders;
    }
}

// Render bookings table
function renderBookingsTable() {
    const tbody = document.getElementById('bookings-tbody');
    const fullTbody = document.getElementById('bookings-tbody-full');
    
    if (tbody) {
        // Show only recent bookings for dashboard (last 5)
        const recentBookings = [...adminData.bookings]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5);
            
        tbody.innerHTML = recentBookings.map(booking => `
            <tr>
                <td>${booking.id}</td>
                <td>${booking.customer}</td>
                <td>${booking.room}</td>
                <td>${booking.date} ${booking.time}</td>
                <td>${booking.duration} hours</td>
                <td>${booking.guests}</td>
                <td>$${booking.total.toFixed(2)}</td>
                <td><span class="status-badge status-${booking.paymentStatus}">${booking.paymentStatus}</span></td>
                <td><span class="status-badge status-${booking.status}">${booking.status}</span></td>
                <td class="action-buttons">
                    <button class="btn btn-primary btn-sm" onclick="viewBookingDetails('${booking.id}')">View</button>
                    <button class="btn btn-outline btn-sm" onclick="editBooking('${booking.id}')">Edit</button>
                </td>
            </tr>
        `).join('');
    }
    
    if (fullTbody) {
        // Apply filters if any
        const statusFilter = document.getElementById('booking-status-filter');
        const dateFilter = document.getElementById('booking-date-filter');
        
        let filteredBookings = [...adminData.bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        if (statusFilter && statusFilter.value !== 'all') {
            filteredBookings = filteredBookings.filter(booking => booking.status === statusFilter.value);
        }
        
        if (dateFilter && dateFilter.value) {
            filteredBookings = filteredBookings.filter(booking => booking.date === dateFilter.value);
        }
        
        fullTbody.innerHTML = filteredBookings.map(booking => `
            <tr>
                <td>${booking.id}</td>
                <td>${booking.customer}</td>
                <td>${booking.room}</td>
                <td>${booking.date} ${booking.time}</td>
                <td>${booking.duration} hours</td>
                <td>${booking.guests}</td>
                <td>$${booking.total.toFixed(2)}</td>
                <td><span class="status-badge status-${booking.paymentStatus}">${booking.paymentStatus}</span></td>
                <td><span class="status-badge status-${booking.status}">${booking.status}</span></td>
                <td class="action-buttons">
                    <button class="btn btn-primary btn-sm" onclick="viewBookingDetails('${booking.id}')">View</button>
                    <button class="btn btn-outline btn-sm" onclick="editBooking('${booking.id}')">Edit</button>
                    <button class="btn btn-outline btn-sm" onclick="cancelBookingAdmin('${booking.id}')">
                        ${booking.status === 'cancelled' ? 'Delete' : 'Cancel'}
                    </button>
                </td>
            </tr>
        `).join('');
    }
}

// Render rooms table
function renderRoomsTable() {
    const tbody = document.getElementById('rooms-tbody');
    if (!tbody) return;

    tbody.innerHTML = adminData.rooms.map(room => `
        <tr>
            <td>${room.id}</td>
            <td>${room.name}</td>
            <td>${room.type}</td>
            <td>${room.capacity}</td>
            <td>$${room.price}/hour</td>
            <td><span class="status-badge status-${room.status}">${room.status}</span></td>
            <td class="action-buttons">
                <button class="btn btn-primary btn-sm" onclick="editRoom('${room.id}')">Edit</button>
                <button class="btn btn-outline btn-sm" onclick="toggleRoomStatus('${room.id}')">
                    ${room.status === 'available' ? 'Disable' : 'Enable'}
                </button>
            </td>
        </tr>
    `).join('');
}

// Render customers table
function renderCustomersTable(searchTerm = '') {
    const tbody = document.getElementById('customers-tbody');
    if (!tbody) return;

    let filteredCustomers = adminData.customers;
    if (searchTerm) {
        filteredCustomers = adminData.customers.filter(customer =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.phone.includes(searchTerm)
        );
    }

    tbody.innerHTML = filteredCustomers.map(customer => `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.bookings}</td>
            <td><span class="customer-status-badge status-${customer.status}">${customer.status}</span></td>
            <td>${customer.joinDate}</td>
            <td class="customer-actions">
                <button class="btn btn-primary btn-sm" onclick="viewCustomerDetails('${customer.id}')">View</button>
                <button class="btn btn-outline btn-sm" onclick="editCustomer('${customer.id}')">Edit</button>
                <button class="btn btn-outline btn-sm" onclick="toggleCustomerStatus('${customer.id}')">
                    ${customer.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
            </td>
        </tr>
    `).join('');
}

// Setup admin event listeners
function setupAdminEventListeners() {
    // Add room button
    const addRoomBtn = document.getElementById('add-room-btn');
    if (addRoomBtn) {
        addRoomBtn.addEventListener('click', () => openRoomModal());
    }

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Modal overlays
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // Room form submission
    const roomForm = document.getElementById('room-form');
    if (roomForm) {
        roomForm.addEventListener('submit', handleRoomSubmit);
    }

    // Admin menu navigation
    document.querySelectorAll('.admin-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            showAdminSection(section);
        });
    });

    // Booking filters
    const bookingStatusFilter = document.getElementById('booking-status-filter');
    if (bookingStatusFilter) {
        bookingStatusFilter.addEventListener('change', renderBookingsTable);
    }

    const bookingDateFilter = document.getElementById('booking-date-filter');
    if (bookingDateFilter) {
        bookingDateFilter.addEventListener('change', renderBookingsTable);
    }

    // Order status filter
    const orderStatusFilter = document.getElementById('order-status-filter');
    if (orderStatusFilter) {
        orderStatusFilter.addEventListener('change', renderOrdersSection);
    }

    // Customer search
    const customerSearch = document.getElementById('customer-search');
    if (customerSearch) {
        customerSearch.addEventListener('input', function() {
            renderCustomersTable(this.value);
        });
    }
}

// Show specific admin section
function showAdminSection(section) {
    // Update active menu item
    document.querySelectorAll('.admin-menu a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Show corresponding section
    document.querySelectorAll('.admin-section').forEach(sect => {
        sect.style.display = 'none';
    });
    
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // If showing reports section, refresh the data
        if (section === 'reports') {
            renderReports();
        } else if (section === 'orders') {
            renderOrdersSection();
        }
    }
}

// Room management functions
function openRoomModal(roomId = null) {
    const modal = document.getElementById('room-modal');
    const title = document.getElementById('modal-title');
    
    if (roomId) {
        // Edit existing room
        const room = adminData.rooms.find(r => r.id === roomId);
        title.textContent = 'Edit Room';
        populateRoomForm(room);
    } else {
        // Add new room
        title.textContent = 'Add New Room';
        document.getElementById('room-form').reset();
        document.getElementById('room-images').innerHTML = '';
    }
    
    modal.classList.add('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function populateRoomForm(room) {
    document.getElementById('room-id').value = room.id;
    document.getElementById('room-name').value = room.name;
    document.getElementById('room-type').value = room.type;
    document.getElementById('room-capacity').value = room.capacity;
    document.getElementById('room-price').value = room.price;
    document.getElementById('room-amenities').value = room.amenities.join(', ');
    document.getElementById('room-status').value = room.status;

    // Populate images
    const imagesContainer = document.getElementById('room-images');
    imagesContainer.innerHTML = room.images.map((image, index) => `
        <div class="room-image" style="background-image: url('${image}')">
            <button type="button" class="remove-image" onclick="removeRoomImage(${index})">×</button>
        </div>
    `).join('');
}

function handleRoomSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const roomId = document.getElementById('room-id').value;
    const isEdit = !!roomId;

    const roomData = {
        id: roomId || 'R' + (adminData.rooms.length + 1).toString().padStart(3, '0'),
        name: formData.get('name'),
        type: formData.get('type'),
        capacity: parseInt(formData.get('capacity')),
        price: parseFloat(formData.get('price')),
        amenities: formData.get('amenities').split(',').map(a => a.trim()),
        images: Array.from(document.querySelectorAll('.room-image')).map(img => 
            img.style.backgroundImage.replace('url("', '').replace('")', '')
        ),
        status: formData.get('status')
    };

    if (isEdit) {
        // Update existing room
        const index = adminData.rooms.findIndex(r => r.id === roomId);
        adminData.rooms[index] = roomData;
    } else {
        // Add new room
        adminData.rooms.push(roomData);
    }

    renderRoomsTable();
    updateAdminStats();
    closeAllModals();
    alert(`Room ${isEdit ? 'updated' : 'added'} successfully!`);
}

function editRoom(roomId) {
    openRoomModal(roomId);
}

function toggleRoomStatus(roomId) {
    const room = adminData.rooms.find(r => r.id === roomId);
    if (room) {
        room.status = room.status === 'available' ? 'maintenance' : 'available';
        renderRoomsTable();
        updateAdminStats();
        alert(`Room ${room.name} status updated to: ${room.status}`);
    }
}

// Booking management functions
function viewBookingDetails(bookingId) {
    const booking = adminData.bookings.find(b => b.id === bookingId);
    if (booking) {
        // Create a modal or alert with booking details
        const foodItems = booking.food.map(item => 
            `${item.name} (x${item.quantity}) - $${item.total} - ${item.status}`
        ).join('\n');
        
        const customizations = booking.customizations.length > 0 ? 
            booking.customizations.join(', ') : 'None';
            
        alert(`Booking Details:\n
ID: ${booking.id}
Customer: ${booking.customer}
Room: ${booking.room}
Date: ${booking.date} at ${booking.time}
Duration: ${booking.duration} hours
Guests: ${booking.guests}
Total: $${booking.total}
Status: ${booking.status}
Payment: ${booking.paymentStatus}
Order Status: ${booking.orderStatus}

Food Items:
${foodItems}

Customizations:
${customizations}`);
    }
}

function editBooking(bookingId) {
    const booking = adminData.bookings.find(b => b.id === bookingId);
    if (booking) {
        const newStatus = prompt('Enter new status (confirmed/pending/cancelled/completed):', booking.status);
        if (newStatus && ['confirmed', 'pending', 'cancelled', 'completed'].includes(newStatus)) {
            booking.status = newStatus;
            renderBookingsTable();
            updateAdminStats();
            alert(`Booking ${bookingId} status updated to: ${newStatus}`);
        }
    }
}

function cancelBookingAdmin(bookingId) {
    const booking = adminData.bookings.find(b => b.id === bookingId);
    if (booking) {
        if (booking.status === 'cancelled') {
            // Delete booking
            if (confirm('Are you sure you want to delete this cancelled booking?')) {
                adminData.bookings = adminData.bookings.filter(b => b.id !== bookingId);
                renderBookingsTable();
                updateAdminStats();
                alert('Booking deleted successfully!');
            }
        } else {
            // Cancel booking
            if (confirm('Are you sure you want to cancel this booking?')) {
                booking.status = 'cancelled';
                booking.paymentStatus = 'refunded';
                booking.orderStatus = 'cancelled';
                renderBookingsTable();
                updateAdminStats();
                alert('Booking cancelled successfully!');
            }
        }
    }
}

// Customer management functions
function viewCustomerDetails(customerId) {
    const customer = adminData.customers.find(c => c.id === customerId);
    if (customer) {
        // Create a modal or alert with customer details
        const customerBookings = adminData.bookings.filter(b => b.customerId === customerId);
        const bookingsInfo = customerBookings.map(booking => 
            `${booking.id} - ${booking.room} on ${booking.date} (${booking.status})`
        ).join('\n');
        
        alert(`Customer Details:\n
ID: ${customer.id}
Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}
Total Bookings: ${customer.bookings}
Status: ${customer.status}
Join Date: ${customer.joinDate}

Booking History:
${bookingsInfo || 'No bookings found'}`);
    }
}

function editCustomer(customerId) {
    const customer = adminData.customers.find(c => c.id === customerId);
    if (customer) {
        const newName = prompt('Enter new name:', customer.name);
        const newEmail = prompt('Enter new email:', customer.email);
        const newPhone = prompt('Enter new phone:', customer.phone);
        
        if (newName && newEmail && newPhone) {
            customer.name = newName;
            customer.email = newEmail;
            customer.phone = newPhone;
            renderCustomersTable();
            alert('Customer information updated successfully');
        }
    }
}

function toggleCustomerStatus(customerId) {
    const customer = adminData.customers.find(c => c.id === customerId);
    if (customer) {
        customer.status = customer.status === 'active' ? 'inactive' : 'active';
        renderCustomersTable();
        alert(`Customer ${customer.name} status updated to: ${customer.status}`);
    }
}

// Order Tracking Functions
function updateOrderStatus(bookingId, status) {
    const booking = adminData.bookings.find(b => b.id === bookingId);
    if (booking) {
        booking.orderStatus = status;
        renderOrdersSection();
        alert(`Order ${bookingId} status updated to: ${status}`);
    }
}

function updateFoodStatus(bookingId, foodName, status) {
    const booking = adminData.bookings.find(b => b.id === bookingId);
    if (booking && booking.food) {
        const foodItem = booking.food.find(f => f.name === foodName);
        if (foodItem) {
            foodItem.status = status;
        }
    }
}

function renderOrdersSection() {
    const ordersGrid = document.querySelector('.orders-grid');
    if (ordersGrid) {
        // Filter orders based on status
        const statusFilter = document.getElementById('order-status-filter');
        let filteredOrders = adminData.bookings;
        
        if (statusFilter && statusFilter.value !== 'all') {
            filteredOrders = adminData.bookings.filter(booking => 
                booking.orderStatus === statusFilter.value
            );
        }
        
        ordersGrid.innerHTML = filteredOrders.map(booking => `
            <div class="order-card">
                <div class="order-header">
                    <h4>Order #${booking.id}</h4>
                    <span class="status-badge status-${booking.orderStatus}">${booking.orderStatus}</span>
                </div>
                <div class="order-details">
                    <p><strong>Customer:</strong> ${booking.customer}</p>
                    <p><strong>Room:</strong> ${booking.room} (${booking.time})</p>
                    <p><strong>Order Time:</strong> ${booking.time}</p>
                </div>
                <div class="order-items">
                    <h5>Food Items:</h5>
                    ${booking.food ? booking.food.map(item => `
                        <div class="order-item">
                            <span>${item.name}</span>
                            <select class="status-select" onchange="updateFoodStatus('${booking.id}', '${item.name}', this.value)">
                                <option value="pending" ${item.status === 'pending' ? 'selected' : ''}>Pending</option>
                                <option value="preparing" ${item.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                                <option value="ready" ${item.status === 'ready' ? 'selected' : ''}>Ready</option>
                                <option value="delivered" ${item.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                            </select>
                        </div>
                    `).join('') : '<p>No food items</p>'}
                </div>
                <div class="order-customizations">
                    <h5>Customizations:</h5>
                    <p>${booking.customizations ? booking.customizations.join(', ') : 'None'}</p>
                </div>
                <div class="order-actions">
                    ${booking.orderStatus === 'pending' ? 
                        `<button class="btn btn-primary btn-sm" onclick="updateOrderStatus('${booking.id}', 'preparing')">Start Preparation</button>` : ''}
                    ${booking.orderStatus === 'preparing' ? 
                        `<button class="btn btn-primary btn-sm" onclick="updateOrderStatus('${booking.id}', 'ready')">Mark as Ready</button>` : ''}
                    ${booking.orderStatus === 'ready' ? 
                        `<button class="btn btn-success btn-sm" onclick="updateOrderStatus('${booking.id}', 'delivered')">Mark Delivered</button>` : ''}
                </div>
            </div>
        `).join('');
    }
}

// Image management functions
function addRoomImage() {
    const url = prompt('Enter image URL:');
    if (url) {
        const imagesContainer = document.getElementById('room-images');
        imagesContainer.innerHTML += `
            <div class="room-image" style="background-image: url('${url}')">
                <button type="button" class="remove-image" onclick="removeRoomImage(${document.querySelectorAll('.room-image').length})">×</button>
            </div>
        `;
    }
}

function removeRoomImage(index) {
    const images = document.querySelectorAll('.room-image');
    if (images[index]) {
        images[index].remove();
    }
}

// Reports functionality
function renderReports() {
    const reportsSection = document.getElementById('reports');
    if (!reportsSection) return;

    reportsSection.innerHTML = `
        <div class="section-header">
            <h3>Reports & Analytics</h3>
            <div class="report-actions">
                <button class="btn btn-outline" onclick="exportReports()">Export CSV</button>
                <button class="btn btn-primary" onclick="generateReport()">Generate Report</button>
            </div>
        </div>
        
        <div class="report-content">
            <div class="report-stats">
                <div class="stat-card">
                    <div class="stat-number">${adminData.reports.customerStats.totalCustomers}</div>
                    <div class="stat-label">Total Customers</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${adminData.reports.customerStats.newThisMonth}</div>
                    <div class="stat-label">New This Month</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${adminData.reports.customerStats.returningRate}</div>
                    <div class="stat-label">Returning Rate</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${adminData.reports.customerStats.averageBookings}</div>
                    <div class="stat-label">Avg Bookings/Customer</div>
                </div>
            </div>

            <div class="report-charts">
                <div class="chart-section">
                    <h4>Monthly Revenue</h4>
                    <div class="chart-container">
                        ${renderRevenueChart()}
                    </div>
                </div>
                
                <div class="chart-section">
                    <h4>Room Performance</h4>
                    <div class="chart-container">
                        ${renderRoomPerformance()}
                    </div>
                </div>
                
                <div class="chart-section">
                    <h4>Peak Booking Hours</h4>
                    <div class="chart-container">
                        ${renderPeakHours()}
                    </div>
                </div>
            </div>

            <div class="detailed-reports">
                <div class="report-table">
                    <h4>Recent Financial Summary</h4>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Bookings</th>
                                <th>Revenue</th>
                                <th>Occupancy Rate</th>
                                <th>Avg. Booking Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>January 2024</td>
                                <td>28</td>
                                <td>$2,850</td>
                                <td>72%</td>
                                <td>$101.79</td>
                            </tr>
                            <tr>
                                <td>December 2023</td>
                                <td>35</td>
                                <td>$3,200</td>
                                <td>85%</td>
                                <td>$91.43</td>
                            </tr>
                            <tr>
                                <td>November 2023</td>
                                <td>26</td>
                                <td>$2,950</td>
                                <td>68%</td>
                                <td>$113.46</td>
                            </tr>
                            <tr>
                                <td>October 2023</td>
                                <td>32</td>
                                <td>$4,100</td>
                                <td>82%</td>
                                <td>$128.13</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderRevenueChart() {
    const maxRevenue = Math.max(...adminData.reports.monthlyRevenue.map(r => r.revenue));
    
    return `
        <div class="bar-chart">
            ${adminData.reports.monthlyRevenue.map(item => `
                <div class="bar-item">
                    <div class="bar-label">${item.month}</div>
                    <div class="bar-container">
                        <div class="bar" style="height: ${(item.revenue / maxRevenue) * 100}%"></div>
                    </div>
                    <div class="bar-value">$${item.revenue}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderRoomPerformance() {
    return `
        <div class="room-performance">
            ${adminData.reports.roomPerformance.map(room => `
                <div class="performance-item">
                    <div class="room-name">${room.room}</div>
                    <div class="performance-stats">
                        <span>${room.bookings} bookings</span>
                        <span>$${room.revenue} revenue</span>
                    </div>
                    <div class="performance-bar">
                        <div class="fill" style="width: ${(room.bookings / 45) * 100}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderPeakHours() {
    const maxBookings = Math.max(...adminData.reports.peakHours.map(h => h.bookings));
    
    return `
        <div class="peak-hours">
            ${adminData.reports.peakHours.map(hour => `
                <div class="hour-item">
                    <div class="hour-label">${hour.hour}</div>
                    <div class="hour-bar-container">
                        <div class="hour-bar" style="width: ${(hour.bookings / maxBookings) * 100}%"></div>
                    </div>
                    <div class="hour-count">${hour.bookings}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function exportReports() {
    alert('Exporting reports to CSV...\n\nIn a real application, this would download a CSV file with all report data.');
}

function generateReport() {
    const reportType = prompt('Enter report type (monthly, quarterly, custom):', 'monthly');
    if (reportType) {
        alert(`Generating ${reportType} report...\n\nReport is being prepared and will be available for download shortly.`);
        
        // Simulate report generation
        setTimeout(() => {
            alert(`${reportType.charAt(0).toUpperCase() + reportType.slice(1)} report generated successfully!\nYou can now export it using the Export CSV button.`);
        }, 2000);
    }
}

// Enhanced Features
function initEnhancedFeatures() {
    // Order tracking initialization
    if (document.getElementById('order-tracking-section')) {
        initOrderTracking();
    }
    
    // Customizations initialization
    if (document.getElementById('customizations-section')) {
        initCustomizations();
    }
    
    // Payment initialization
    if (document.getElementById('payment-section')) {
        initPayment();
    }
}

function initOrderTracking() {
    // Check if we have a booking to track
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('tracking') || bookingData.id;
    
    if (bookingId) {
        updateCustomerOrderStatus(bookingId);
        
        // Set up periodic status updates (simulated)
        setInterval(() => {
            // In a real app, this would check with the server
            // For demo, we'll randomly update status occasionally
            if (Math.random() > 0.7) {
                const booking = adminData.bookings.find(b => b.id === bookingId);
                if (booking && booking.orderStatus !== 'delivered') {
                    const statuses = ['preparing', 'cooking', 'ready', 'delivered'];
                    const currentIndex = statuses.indexOf(booking.orderStatus);
                    if (currentIndex < statuses.length - 1) {
                        booking.orderStatus = statuses[currentIndex + 1];
                        updateCustomerOrderStatus(bookingId);
                    }
                }
            }
        }, 10000); // Check every 10 seconds
    }
}

function updateCustomerOrderStatus(bookingId) {
    const booking = adminData.bookings.find(b => b.id === bookingId);
    if (booking && document.getElementById('order-status')) {
        document.getElementById('order-status').textContent = 
            booking.orderStatus.charAt(0).toUpperCase() + booking.orderStatus.slice(1);
        
        // Update food items status
        const foodStatusContainer = document.getElementById('food-status');
        if (foodStatusContainer && booking.food) {
            foodStatusContainer.innerHTML = booking.food.map(item => `
                <div class="food-status-item">
                    <span class="food-name">${item.name}</span>
                    <span class="status-badge status-${item.status}">${item.status}</span>
                </div>
            `).join('');
        }
    }
}

function initCustomizations() {
    renderCustomizations();
    
    // Add event listener for customization form
    const customizationForm = document.getElementById('add-customization-form');
    if (customizationForm) {
        customizationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const customization = document.getElementById('customization-text').value;
            if (customization.trim()) {
                addCustomization(customization.trim());
                document.getElementById('customization-text').value = '';
            }
        });
    }
}

function addCustomization(customization) {
    if (!bookingData.customizations) {
        bookingData.customizations = [];
    }
    bookingData.customizations.push(customization);
    saveBookingData();
    renderCustomizations();
}

function removeCustomization(index) {
    if (bookingData.customizations && bookingData.customizations[index]) {
        bookingData.customizations.splice(index, 1);
        saveBookingData();
        renderCustomizations();
    }
}

function renderCustomizations() {
    const container = document.getElementById('customizations-list');
    if (container) {
        if (bookingData.customizations && bookingData.customizations.length > 0) {
            container.innerHTML = bookingData.customizations.map((custom, index) => `
                <div class="customization-item">
                    <span>${custom}</span>
                    <button type="button" class="btn btn-outline btn-sm" onclick="removeCustomization(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
        } else {
            container.innerHTML = '<p class="no-customizations">No customizations added</p>';
        }
    }
}

function initPayment() {
    // Set up payment method selection
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            document.getElementById('payment-submit').textContent = 
                `Pay with ${this.nextElementSibling.textContent}`;
        });
    });
    
    // Set up payment form submission
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPaymentForm();
        });
    }
}

function processPaymentForm() {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    if (!paymentMethod) {
        alert('Please select a payment method');
        return;
    }
    
    const amount = parseFloat(document.getElementById('payment-amount').textContent.replace('$', ''));
    const bookingId = bookingData.id || 'BK' + Date.now().toString().slice(-6);
    
    // Show loading state
    const submitBtn = document.getElementById('payment-submit');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;
    
    processPayment(bookingId, paymentMethod.value, amount)
        .then(result => {
            alert(`Payment successful! Transaction ID: ${result.transactionId}`);
            // Redirect to booking details
            window.location.href = 'booking-details.html?id=' + bookingId;
        })
        .catch(error => {
            alert(error.message);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

function processPayment(bookingId, paymentMethod, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% success rate for demo
            
            if (success) {
                resolve({
                    success: true,
                    transactionId: 'TXN' + Date.now().toString().slice(-8),
                    message: 'Payment processed successfully'
                });
            } else {
                reject({
                    success: false,
                    message: 'Payment failed. Please try again.'
                });
            }
        }, 2000);
    });
}

// Simple redirect function for payment button
function goToBookingDetails() {
    window.location.href = 'booking-details.html';
}

// Booking details functionality
function initBookingDetails() {
    if (document.querySelector('.booking-details-container')) {
        // Check if we have booking data in session storage
        const savedBooking = sessionStorage.getItem('karaokeBooking');
        if (savedBooking) {
            const bookingData = JSON.parse(savedBooking);
            populateBookingDetails(bookingData);
        } else {
            // Load sample data for demo
            loadSampleBookingData();
        }
    }
}

function loadSampleBookingData() {
    const sampleData = {
        room: 'standard',
        date: '2024-01-15',
        time: '19:00',
        duration: '2',
        guests: 4,
        food: [
            { name: 'Chicken Wings', price: 12, quantity: 2, total: 24 },
            { name: 'Soft Drinks', price: 3.5, quantity: 4, total: 14 },
            { name: 'French Fries', price: 6.5, quantity: 1, total: 6.5 }
        ],
        customizations: ['Extra microphone', 'Birthday decorations'],
        total: 99.50
    };
    populateBookingDetails(sampleData);
}

function populateBookingDetails(bookingData) {
    // Format date for display
    const bookingDate = new Date(bookingData.date);
    const formattedDate = bookingDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Calculate end time
    const startTime = bookingData.time;
    const duration = parseInt(bookingData.duration);
    const [hours, minutes] = startTime.split(':').map(Number);
    const endTime = new Date();
    endTime.setHours(hours + duration, minutes);
    const formattedEndTime = endTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Update booking details
    document.getElementById('booking-id').textContent = `BK${Date.now().toString().slice(-6)}`;
    document.getElementById('booking-date').textContent = formattedDate;
    
    let roomName = '';
    let roomPrice = 0;
    switch(bookingData.room) {
        case 'standard':
            roomName = 'Standard Room';
            roomPrice = 25;
            break;
        case 'premium':
            roomName = 'Premium Room';
            roomPrice = 40;
            break;
        case 'vip':
            roomName = 'VIP Suite';
            roomPrice = 60;
            break;
    }
    
    document.getElementById('room-type').textContent = roomName;
    document.getElementById('time-slot').textContent = 
        `${startTime} - ${formattedEndTime} (${duration} hour${duration > 1 ? 's' : ''})`;
    document.getElementById('guests-count').textContent = 
        `${bookingData.guests} guest${bookingData.guests > 1 ? 's' : ''}`;
    
    const roomTotal = roomPrice * duration;
    const foodTotal = bookingData.food.reduce((sum, item) => sum + item.total, 0);
    const serviceFee = 5.00;
    const grandTotal = roomTotal + foodTotal + serviceFee;
    
    document.getElementById('total-amount').textContent = `$${grandTotal.toFixed(2)}`;
}

// Simple navigation functions
function proceedToFood() {
    if (validateBooking()) {
        window.location.href = 'food.html';
    }
}

function proceedToPayment() {
    window.location.href = 'payment.html';
}

function proceedToConfirmation() {
    window.location.href = 'confirmation.html';
}